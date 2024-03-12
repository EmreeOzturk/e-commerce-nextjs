"use client"
import { Button, TextInput } from '@mantine/core'
import { IconArrowRight, IconKey, IconMail } from '@tabler/icons-react'
import { Formik, Form, Field } from 'formik'
import React from 'react'

const LoginForm = () => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={(values) => {
                console.log(values)
            }}

        >
            {
                (form) => (
                    <Form>
                        <Field name='email'>
                            {
                                (
                                    { field, form }: any
                                ) => (
                                    <TextInput placeholder="Email" variant="filled" size='xl' mb={10} id='email'
                                        {...field}
                                        leftSection={<IconMail size={22} />}
                                    />
                                )
                            }
                        </Field>

                        <Field name='password'>
                            {
                                (
                                    { field, form }: any
                                ) => (
                                    <TextInput placeholder="Password" variant="filled" type="password" size='xl' mb={10} id='password'
                                        {...field}
                                        leftSection={<IconKey size={22} />}
                                    />
                                )
                            }
                        </Field>
                        <Button
                            variant="outline"
                            size='md'
                            w={"100%"}
                            color='shoppi-secondary'
                            rightSection={<IconArrowRight size={14} />}
                            type='submit'
                        >
                            Login
                        </Button>
                    </Form>
                )
            }

        </Formik>
    )
}

export default LoginForm