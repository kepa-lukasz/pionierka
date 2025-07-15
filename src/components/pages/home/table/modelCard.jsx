import GoalProgress from "../../../multiUsable/progressbar3"
import { Link } from "react-router-dom"
const ModelCard = ({ model }) => {
    return (
        <div class=" col-12 col-md-6 col-lg-4 col-xl-3 container p-3">

            <div class=" row flex-wrap">

                <div class="">
                    <Link to={`/szczegoly/${model.idx}`} >
                        <div class=" card card-block p-2">
                            <img src={process.env.PUBLIC_URL +`${model.source}/podglad.jpg`} alt={model.name} />
                            <h2 class="card-title  mt-3 mb-3">{model.name}</h2>
                            {/* <p class="">{model.desc}</p> */}

                            <div className="d-flex flex-wrap row-gap-2" >
                                <div className="px-1 col-6">

                                <div className=" border rounded px-2">
                                    <p>Zużycie: <span className="fw-bold">{model.usedMaterials}m</span></p>
                                    <GoalProgress value={model.materialRating} percentage={60} />
                                </div>
                                </div>
                                <div className="px-1 col-6">

                                <div className="border rounded px-2">
                                    <p>Trudność</p>
                                    <GoalProgress value={model.difficulty} percentage={60} />
                                </div>
                                </div>
                                <div className="px-1 col-6">
                                <div className="border rounded px-2">
                                    <p>Estetyka</p>
                                    <GoalProgress reverse={true} value={model.beauty} percentage={60} />
                                </div>
                                </div>
                                <div className="px-1 col-6">
                                <div className="border rounded px-2">
                                    <p>Użyteczność</p>
                                    <GoalProgress reverse={true} value={model.utility} percentage={60} />
                                </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

        </div >

    )
}
export default ModelCard