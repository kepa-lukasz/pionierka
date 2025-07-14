import React, { useState } from 'react'
import models from './metadata.json'
import ModelViewer from './modelViewer'

export default function ModelSelector() {
    const [selectedModel, setSelectedModel] = useState(models[0]) // domyślnie pierwszy model

    return (
        <div>
            <h2>Wybierz model:</h2>
            <div className='d-flex'>

                {models.map((model) => (
                    <div className='col-12 col-md-6 p-1'>
                        <div className='w-100 border' >

                            <ModelViewer model={model} />
                            <div>
                                <h3>{model.name}</h3>
                                <p>{model.desc}</p>
                                <p>⭐ {model.stars} / 5</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>


        </div>
    )
}
