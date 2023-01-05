import Footer from "./Footer";
import Navbar from "./Navbar";

import { useState } from "react";

export default function Contact() {

    const [name, setName] = useState("")
    const [mobile, setMobile] = useState()
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [description, setDescription] = useState("")

    const handleReset = () => {
        setName("")
        setMobile()
        setEmail("")
        setCountry("India")
        setDescription("")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let responce = await fetch("/feedback", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: {
                name, 
                mobile_no: mobile,
                email_addr: email,
                country,
                description
            }
        })
        let result = await responce.json()
        console.log(result)
    }

    return (
        <div>
            <Navbar />
            <section className="p-5 my-4">
                <div className="container">
                    <div className="d-lg-flex p-4 justify-content-evenly">
                        <div className="me-auto">
                            <h2>Feedback Form</h2><hr />
                            {/* <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                          </div><br /> */}
                            <form onSubmit={async (e) => handleSubmit(e)}>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input className="form-control" type="text" value={name} onChange={e => setName(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Mobile Number</label>
                                    <input type="number" className="form-control" value={mobile} onChange={e => setMobile(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email Address</label>
                                    <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Country</label>
                                    <select className="form-select" aria-label="Default select example" value={country} onChange={e => setCountry(e.target.value)}>
                                        <option selected value="india">India</option>
                                        <option value="australia">Australia</option>
                                        <option value="usa">USA</option>
                                        <option value="mexico">Mexico</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={description} onChange={e => setDescription(e.target.value)} required></textarea>
                                </div>
                                <button className="btn btn-dark me-3" type="submit">Submit</button>
                                <button className="btn btn-dark me-3" type="reset">Reset</button><br />
                            </form>

                        </div> <br />
                        <div className="text-center">

                            <h4>School Address</h4>
                            <address>Podar International School, Near Laxmi Temple, Kupwad MIDC Road, Vishrambag,Sangli. 416415</address>
                            <h5 className="mx-4"><i className="bi bi-google"></i>   <a href="mailto:principal.sangli@podar.org">principal.sangli@podar.org</a></h5>
                            <p>Podar International School, Sangli.</p>
                            <p>
                                The users can contact us via our email id or the feedback form given below. <br />
                                You can message us on our social media handles. <br />
                                You can talk to us privately by sending a message on our phone number. <br />
                                <div className="d-lg-flex align-items-center justify-content-center">
                                    <h5 className="mx-4"><i className="bi bi-google"></i> <a href="mailto:ogamethorns@gmail.com">ogamethorns@gmail.com</a></h5>
                                    <h4><i className="bi bi-twitter"></i> @cartoonify</h4>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
} 