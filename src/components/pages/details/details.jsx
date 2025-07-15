import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../../model/metadata.json';
import ModelViewer from './modelViewer';
import { Button } from 'react-bootstrap';
import GoalProgress from '../../multiUsable/progressbar3';
import { Card, ListGroup, Row, Col, Container } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { FaWrench } from "react-icons/fa";

import "./details.css"
import ImageCarousel from './caruosel';
import CreatePDF from '../createpdf/createpdf';

const DetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const i = parseInt(id);
        if (!isNaN(i) && i >= 0 && i < data.length) {
            setItem(data[i]);
        } else {
            setItem(null);
        }
    }, [id]);

    if (!item) {
        return (
            <div className="container mt-4">
                <p>Nie znaleziono danych. <button className="btn btn-link p-0" onClick={() => navigate(-1)}>Wróć</button></p>
            </div>
        );
    }

    return (
        <div className="container my-4">
            <Button onClick={() => { navigate(-1) }} className='my-1' variant='secondary'>Wróć</Button>
            <div className='border rounded m-auto' style={{ height: "70vh" }} >
                <ModelViewer source={item.source} position={item.position} />
            </div>
            <div className='d-flex justify-content-end'>


                <div >
                    Autor:  <span className='fw-lighter small '>
                        {item.creator}
                    </span>
                </div>
            </div>
            <h1>{item.name}</h1>

            <CreatePDF/>
            <div className="d-flex flex-wrap" >
                <div className='col-6 col-md-3 px-1'>

                    <div className="p-2 border rounded rounded-3">
                        <p>Zużycie: <span className='fw-bold'>{item.usedMaterials}m</span></p>
                        <GoalProgress value={item.materialRating} />
                    </div>
                </div>
                <div className='col-6 col-md-3 px-1'>

                    <div className="p-2 border rounded rounded-3">
                        <p>Estetyka</p>
                        <GoalProgress reverse={true} value={item.beauty} />
                    </div>
                </div>
                <div className='col-6 col-md-3 px-1'>

                    <div className="p-2 border rounded rounded-3">
                        <p>Trudność</p>
                        <GoalProgress value={item.difficulty} />
                    </div>
                </div>
                <div className='col-6 col-md-3 px-1'>

                    <div className="p-2 border rounded rounded-3">
                        <p>Użyteczność</p>
                        <GoalProgress reverse={true} value={item.utility} />
                    </div>
                </div>

            </div>


            <Row className='mx-1 pt-4'>
                <div className='col-12 col-md-6'>
                    <div className='d-flex flex-wrap '>
                        <div className='col-6 p-1 h-100' >
                            <div style={{ position: "relative" }} className='h-100 border border-success border-3 rounded rounded-2 p-2'>
                                <h5 className='text-center pt-2'>Zalety</h5>
                                <div className='icon'>
                                    <FaCheckCircle color='green' size={25} />
                                </div>
                                <ul>
                                    {item.advantages.map((el) => {
                                        return (<li>{el}</li>)
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className='col-6 p-1 h-100'>
                            <div style={{ position: "relative" }} className='h-100 border border-danger border-3 rounded rounded-2 p-2'>
                                <h5 className='text-center pt-2'>Wady</h5>
                                <div className='icon'>
                                    <FaTimesCircle color='red' size={25} />
                                </div>
                                <ul>
                                    {item.disadvantages.map((el) => {
                                        return (<li>{el}</li>)
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 pt-3'>
                        <div className='col-12 p-0 h-100' >
                            <div style={{ position: "relative" }} className='h-100 border border-warning border-3 rounded rounded-2 p-2'>
                                <h5 className='text-center pt-2'>Potrzebne materiały</h5>
                                <div className='icon bg-warning d-flex justify-content-center align-items-center'>
                                    <FaWrench
                                        color='white' size={15} />

                                </div>
                                <div className=' d-flex flex-wrap justify-content-center'>
                                    {item.neededMaterials.map((el) => {
                                        return (
                                            <div className='p-1'>
                                                <div className='border rounded-2 p-2 px-4'>
                                                    <span className='fw-bold'>{el[0]}</span> : {el[1]} szt
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' py-2 px-1'>
                        <p>{item.desc}</p>
                    </div>

                </div>

                <div className='col-12 col-md-6'>
                    <ImageCarousel source={item.source} />
                </div>

            </Row>


        </div>
    );
};

export default DetailsPage;
