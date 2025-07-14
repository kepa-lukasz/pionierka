import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import models from '../model/metadata.json'
import ModelViewer from '../model/modelViewer'
import './model.css' // opcjonalne, dla stylu paginacji
import ModelCard from './modelCard'

export default function ModelSelector() {
    const itemsPerPage = 12
    const [currentPage, setCurrentPage] = useState(0)

    const handlePageClick = (data) => {
        setCurrentPage(data.selected)
    }

    const offset = currentPage * itemsPerPage
    const currentModels = models.slice(offset, offset + itemsPerPage)

    return (
        <div>
            <h2>Wybierz model:</h2>
            <div className='d-flex flex-wrap'>
                {currentModels.map((model, index) => (
                    
                        
                           
                            <ModelCard model={model}/>
                       
                ))}
            </div>

            <ReactPaginate
                previousLabel={'←'}
                nextLabel={'→'}
                breakLabel={'...'}
                pageCount={Math.ceil(models.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </div>
    )
}
