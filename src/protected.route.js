import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "./auth.context"

const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => {
// .com/profie/endu3bdu3ub
    return (
        <Route
            {...rest}
            render={(props) => {
                if (authenticated) {
					return <Component path={props.location} {...props} />
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                /**
                                 * object containing the pathname that the user was trying to access before being redirected,
                                 * as well as any query parameters that were passed along with the request
                                 */
                                state: { from: props.location },
                            }}
                        />
                    )
                }
            }}
        />
    )
}

export default ProtectedRoute
