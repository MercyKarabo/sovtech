import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import profilePic from './profile.png';
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

const Details = (props: any) => {
    const name = props.location.state.name;
    const id = props.location.state.id;
    const height = props.location.state.height;
    const mass = props.location.state.mass;
    const birthyear = props.location.state.birthyear;
    const haircolor = props.location.state.haircolor;
    const skincolor = props.location.state.skincolor;
    const eyecolor = props.location.state.eyecolor;
    // const created = props.location.state.created;
    const gender = props.location.state.gender;
    const homeworld = props.location.state.homeworld;

    return (
        <div className={"box-c"}>
            <div className={"container container-height"}>
                <div className={"row justify-content-center align-items-center container-height"}>
                    <div className={"col-lg-9 col-sm-10 col-12 content-profile"}>
                        <div className={"col-lg-12"}>
                            <Link to={{ pathname: '/' }} data-tip="Back">
                                <ReactTooltip />
                                <BiArrowBack size={30} className={"back"} />
                            </Link>
                        </div>
                        <div className={"row justify-content-center"}>


                            <div className={"col-lg-3 col-12 text-center"}>
                                <div className={"row justify-content-center align-items-center h-100"}>
                                    <img src={profilePic} className={"profilepic"} alt={""} /><br />
                                    <b className={"nameHeading"}>{name}<br />
                                        <span className={"gender"}>{gender}</span></b><br />

                                </div>
                            </div>

                            <div className={"col-lg-1 col-12 v-divider-container"}>
                                <div className={"row justify-content-center"}>
                                    <div className={"v-divider"}></div>
                                </div>
                            </div>

                            <div className={"col-lg-6 col-12 p-4"}>
                                <div className={"row align-items-center justify-content-center h-100 right-container"}>
                                    <div className={"col-lg-10 col-12 p-4 mobile-view"}>
                                        <b className={"main-heading"}>Attributes</b><br />
                                        <div className={"row"}>
                                            <div className={"   col-lg-4 col-6"}>
                                                ID
                                            </div>

                                            <div className={" col-lg-8 col-6"}>
                                                {id}
                                            </div>

                                            <div className={"   col-lg-4 col-6"}>
                                                Height
                                            </div>

                                            <div className={" col-lg-8 col-6"}>
                                                {height}
                                            </div>

                                            <div className={"   col-lg-4 col-6"}>
                                                Mass
                                            </div>

                                            <div className={" col-lg-8 col-6"}>
                                                {mass}
                                            </div>


                                            <div className={"   col-lg-4 col-6"}>
                                                Birth year
                                            </div>

                                            <div className={" col-lg-8 col-6"}>
                                                {birthyear}
                                            </div>

                                            <div className={"   col-lg-4 col-6"}>
                                                Homeworld
                                            </div>

                                            <div className={" col-lg-8 col-6"}>
                                                {homeworld}
                                            </div>

                                            <div className={"col-lg-12 mt-4 mb-3"}>
                                                <b className={"fontSize"}>Extras</b>
                                            </div>

                                            <div className={"   col-lg-4 col-6"}>
                                                Hair color
                                            </div>

                                            <div className={" col-lg-8 col-6"}>
                                                {haircolor}
                                            </div>

                                            <div className={"   col-lg-4 col-6"}>
                                                Eye color
                                            </div>

                                            <div className={" col-lg-8 col-6"}>
                                                {eyecolor}
                                            </div>

                                            <div className={"   col-lg-4 col-6"}>
                                                Skin color
                                            </div>

                                            <div className={" col-lg-8 col-6"}>
                                                {skincolor}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"blanket"}></div>
            </div>
        </div>
    )
}

export default Details;