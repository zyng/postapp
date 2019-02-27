import React from 'react';


const SignIn = (props) => {
    const { handleChange, handleSubmit } = props;
    return (
        <div className="signin-container">
            <h3 className="title">Sign In <span>Now</span></h3>
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="email" id="email" type="email" className="validate" onChange={handleChange} />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="password" id="password" type="password" className="validate" onChange={handleChange} />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>

                    <button type="submit" className="waves-effect waves-light btn red lighten-1 right">Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;