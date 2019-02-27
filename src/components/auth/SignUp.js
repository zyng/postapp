import React from 'react';

const SignUp = (props) => {
    const { handleChange, handleSubmit } = props;
    return (
        <div className="signup-container">
            <h3 className="title">Sign Up <span>Now</span></h3>
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" name="firstName" type="text" className="validate" onChange={handleChange} />
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" name="lastName" type="text" className="validate" onChange={handleChange} />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="password" name="password" type="password" className="validate" onChange={handleChange} />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="password_confirm" name="passwordConfirm" type="password" className="validate" onChange={handleChange} />
                            <label htmlFor="password_confirm">Password (Confirm)</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" name="email" type="email" className="validate" onChange={handleChange} />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <button type="submit" className="waves-effect waves-light btn red lighten-1 right">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;