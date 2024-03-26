import { BrowserRouter, Routes as Switch, Route, redirect, Navigate } from "react-router-dom"
import { Dasboard } from "../pages"

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route path="/pagina-inicial" element={<Dasboard />}/>
                
                <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
            </Switch>
        </BrowserRouter>
    )
}