import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button/Button'
import { Link } from "react-router-dom"

const Div = styled.div`
    height: 100vh;
    font-family: 'Segoe UI', sans-serif;
    background-color: #242424;
`

export const Login = () => {

    return (
        <Div>
            <div className='container h-100'>
                <div className='row h-100 text-center'>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="card shadow">
                            <div className="card-body p-5">
                                <form>
                                    <div className="mb-3">
                                        <label className="mb-2 text-muted">Usuário</label>
                                        <input type="text" className="form-control" name="usuario" autoFocus />
                                    </div>
                                    <div className="mb-3">
                                        <div className="mb-2 w-100">
                                            <label className="text-muted" htmlFor="password">Password</label>
                                        </div>
                                        <input type="password" className="form-control" name="senha" />
                                    </div>

                                    <div className="d-flex align-items-center">
                                        <Link to="/perfil"><Button text='Entrar' type='submit' style='btn btn-warning' /></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Div>

    )
}
