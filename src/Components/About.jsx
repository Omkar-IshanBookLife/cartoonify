import Footer from "./Footer";
import Navbar from "./Navbar";

export default function About() {
    return (

        <div>
            <Navbar />
            <section className="p-5 my-4">
                <div className="container">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                aria-selected="true">About Cartoonify</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                aria-selected="false">About our Team</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                                aria-selected="false">About our Mentors</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-school-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-school" type="button" role="tab" aria-controls="pills-school"
                                aria-selected="false">About our School</button>
                        </li>

                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    {/* <h2>About Cartoonify</h2> */}
                    <p><strong>Cartoonify NFTs</strong> is a website that is focused on giving opportunities to village
                        artisans to sell their
                        artworks online as NFTs. We, at Cartoonify believe that even these people who are considered as
                        backward should be having such exposure and should have opportunities to earn money through
                        these new developments of mankind. We also believe that this website will bring a change and
                        will support the efforts made to lot let the traditional art of India and the world die.</p>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    {/* <h2>About our Team</h2> */}
                    <p><strong>Omkar kumbhar</strong>- Omkar, an enthusiastic 13-year-old coder, studying in the 8th
                        grade at Podar
                        International School, Sangli is the main developer of the website. A Dungeons and Dragons
                        player, who loves reading manga, has been working nights on nights to make this website
                        possible. He is a kind-hearted, frank, and simple-minded boy. Legend says, to this day Omkar
                        hasn't found a person who plays Dungeons and Dragons with him. The search is still on. <br /><br />

                        <strong>Dev kore</strong>- Dev is the all-rounder guy of this company. He has his hands in
                        marketing, coding, and
                        pitching part. He has a very distinctive deep voice which sounds kinda cool and could also scare
                        the life out of a mature adult. He likes collecting stamps, loves playing video games, and has a
                        good gaming chair. He is very enthusiastic and is a team player who has contributed to all
                        aspects of this project. <br /><br />

                        <strong>Param Shah</strong>- Param is the guy who looks after the words. Literally. Even all of
                        this description
                        is written by him. He is the designer of the web pages of this website. He also looks after the
                        pitching, marketing, and financial part of the website. He has many hobbies. Just to count a
                        few, he plays basketball, likes basketball, and loves reading and writing. <br />
                    </p>
                </div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    {/* <h2>About Our Mentor</h2> */}
                    <p>
                        <strong>Padmini Kavathekar</strong> is the mentor of this team of three who is a teacher in
                        Podar International School, Sangli. She encouraged the three students to bring this project to a
                        reality and has supported the development of this project. <br /><br />
                        <strong>Sandeep Madiwal</strong> sir from MIT ADT university, Pune, is the mentor of the three
                        students, Omkar, Dev, and Param who have created this website. Under his wise guidance, this
                        service has taken shape. His suggestions, comments, and help have made this website possible.
                        His encouraging words, constant follow up on our work, and the follow up on the progress we made
                        kept the team pushing to make the best out of Cartoonify.

                    </p>
                </div>

                <div class="tab-pane fade" id="pills-school" role="tabpanel" aria-labelledby="pills-school-tab">
                    {/* <h2>About our School</h2> */}
                    <p>The three students, Omkar Kumbhar, Dev Kore, and Param Shah, are from Podar International School
                        and Junior college, Sangli. This school located in Sangli has given major exposure to the
                        students which led to the development of many such projects.</p>

                    
                </div>               
            
            </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}