import React, {useState} from 'react'
import styled from "styled-components";
import {Formik, Form, Field} from "formik"
import axios from "axios"

function Update() {

    return (
        <Container>
            <h1 style={{textAlign: "center"}}>Welcome to the update page.</h1>
            <Formik
                initialValues={{
                    passcode: "",
                }}
                validate={values => {
                    const errors = {};
                    if (!values.passcode) { errors.passcode = "Please enter passcode" }
                    return errors;
                }}
                onSubmit={async (data, {setSubmitting}) => {
                    axios.post("http://localhost:8000/api/update/", {passcode: data.passcode})
                        .then((res) => console.log(res))
                        .catch((err) => alert(err.response.data))
                }}
            >
                <Form>
                    <Input type="text" name="passcode" placeholder="Please enter credentials to update events"/>
                    <Button type="submit">submit</Button>
                </Form>
            </Formik>
        </Container>
    )
}

const Container = styled.div`
    width: 50%;
    margin: auto;
    min-height: calc(100vh - 232px - 144px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Input = styled(Field)`
    width: 500px !important;
    text-align: center;
`

const Button = styled.button`
    display: block;
    margin: 1em auto;
`

export default Update
