import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Feature.css';

const Feature = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle subheading="Check It Out" heading="Featured Item"></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36'>
                <div >
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2023
                    </p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat earum incidunt vitae accusamus quaerat quis ipsa laborum deleniti, dolore, sapiente nostrum? Reiciendis vitae fugiat iusto exercitationem. Officiis tempora totam voluptates?
                    </p>
                    <button className='btn btn-outline border-0 border-b-4'>Order Now</button>
                </div>
                
            </div>
        </div>
    );
};

export default Feature;