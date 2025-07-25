import React from "react";
import Layout from "../../components/Layouts/Layout";
import "../../styles/HomeStyle.css"
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

const Home = () => {
    return (
        <>
            <Layout>
                {/* Home Section Hero banner  */}
                <Section1 />

                {/* Home Section About  */}
                <Section2 />

                {/* Home Menu section  */}
                <Section3/>

                {/* Home Promotion Section  */}
                <Section4/>

                {/* Home Shop Section  */}
                <Section5 />

                {/* Home Blog Section  */}
                <Section6/>

                {/* Home section Contact  */}
                <Section7 />
            </Layout>
        </>
    );
};

export default Home;