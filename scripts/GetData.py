import requests
import json

# Constants
baseLink = "https://www.registrar.ucla.edu"
urlsToDoBase = "/Academics/Course-Descriptions/Course-Details"

classTagStart = "<h3>"
classTagEnd = "</h3>"
tagStartLen = len(classTagStart)
tagEndLen = len(classTagEnd)

subjectTagStart = "<span id=\"dnn_ctr38600_CourseDetails_headerText\">"
subjectTagEnd ="</span>"
subStartLen = len(subjectTagStart)
subEndLen = len(subjectTagEnd)

# json storage
data = {}
data['courses'] = []
id = 0

# URL list (CHANGE ONLY THIS LINK TO ADJUST FOR DNS CHANGES)
urls = []
baseURL = "https://www.registrar.ucla.edu/Academics/Course-Descriptions"

payload = {}
headers = {
'Cookie': 'dnn_IsMobile=False; language=en-US; .ASPXANONYMOUS=c3TaOtPH1gEkAAAAYmZmNjFkODUtMWVkZS00MGMyLTlhMTUtMGViMjJkZjg3ZWY20; __RequestVerificationToken=0QYHfDWCsAwbnJciSk7-RfV9y2QjSuuR5FcpJn6OW3CVBGzwhbImi2VOV9EuxpWIaf4_Uh7iDVVkWwDzMPW2uHWPpoap05uhKiBtAcnq-ku95kOxajpf1laVIq81; BIGipServerdnn.uclanet.ucla.edu.app~dnn.uclanet.ucla.edu_pool=1537216684.20480.0000'
}

# Request to text parse
response = requests.request("GET", baseURL, headers=headers, data = payload)
respText = response.text
subjectCount = respText.count(urlsToDoBase)

subjId_st = 0
subjId_en = 0

for i in range(subjectCount): 
    subjId_st = respText.find(urlsToDoBase, subjId_en)
    subjId_en = respText.find("\"", subjId_st)
    urlEnd = respText[subjId_st:subjId_en].split("amp;")
    link = baseLink + urlEnd[0]
    if len(urlEnd) == 2:
        link = link + urlEnd[1]
    urls.append(link)

for url in urls:
    # # GET Request
    # url = "https://www.registrar.ucla.edu/Academics/Course-Descriptions/Course-Details?SA=AF+AMER&funsel=3"

    payload = {}
    headers = {
    'Cookie': 'dnn_IsMobile=False; language=en-US; .ASPXANONYMOUS=c3TaOtPH1gEkAAAAYmZmNjFkODUtMWVkZS00MGMyLTlhMTUtMGViMjJkZjg3ZWY20; __RequestVerificationToken=0QYHfDWCsAwbnJciSk7-RfV9y2QjSuuR5FcpJn6OW3CVBGzwhbImi2VOV9EuxpWIaf4_Uh7iDVVkWwDzMPW2uHWPpoap05uhKiBtAcnq-ku95kOxajpf1laVIq81; BIGipServerdnn.uclanet.ucla.edu.app~dnn.uclanet.ucla.edu_pool=1537216684.20480.0000'
    }

    # Request to text parse
    response = requests.request("GET", url, headers=headers, data = payload)
    respText = response.text

    # Find subject name
    subjNameStartLocation = respText.find(subjectTagStart) + subStartLen
    subjNameEndLocation = respText.find(subjectTagEnd, subjNameStartLocation)
    subjectName = respText[subjNameStartLocation:subjNameEndLocation-1]

    # Subject seperation
    subj = subjectName.split(' (')
    subjectFullName = subj[0]
    subjectPartial = ""

    # Some classes don't have abbreviations
    if len(subj) == 1: 
        subjectPartial = subj[0]
    else: 
        subjectPartial = subj[1][0:len(subj[1])-1]
    print("Working on: " + subjectName)

    # Number of classes
    classCount = respText.count(classTagStart)

    # Indices
    classNameStartLocation = 0
    classNameEndLocation = 0

    for i in range(classCount): 
        # Indices
        classNameStartLocation = respText.find(classTagStart, classNameStartLocation) + tagStartLen
        classNameEndLocation = respText.find(classTagEnd, classNameStartLocation)
        fullClassName = respText[classNameStartLocation:classNameEndLocation].replace('. ', '-', 1)
        classNameArr = fullClassName.split('-')
        data['courses'].append({
            'courseID': id,
            'courseNumber': subjectPartial + ' ' + classNameArr[0],
            'courseName': classNameArr[1],
            'subject': subjectFullName
        })
        id = id + 1

        # Test Print
        # print('\t' + 'Class: ' + fullClassName)

# # Checking system
# jsonTxt = json.dumps(data)
# json_object = json.loads(jsonTxt)
# json_formatted_str = json.dumps(json_object, indent=2)
# print(json_formatted_str)

# Write to JSON file
with open('classes.json', 'w') as json_file:
    json.dump(data, json_file, indent=2)

