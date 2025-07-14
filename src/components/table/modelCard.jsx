import GoalProgress from "../multiUsable/progressbar3"

const ModelCard = ({ model }) => {
    return (
        <div class="col-12 col-md-6 col-lg-4 container p-3">

            <div class="row flex-wrap">

                <div class="">
                    <div class="card card-block p-2">
                        <img src={model.source} alt="Photo of sunset" />
                        <h2 class="card-title  mt-3 mb-3">{model.name}</h2>
                        <p class="">{model.desc}</p>

                        <div className="d-flex flex-wrap" >

                            <div className="col-6 border">
                                <p>Zużycie</p>
                                <GoalProgress value={model.materialRating} percentage={60} />
                            </div>
                            <div className="col-6 border">
                                <p>Trudność</p>
                                <GoalProgress value={model.difficulty} percentage={60} />
                            </div>
                            <div className="col-6 border">
                                <p>Estetyka</p>
                                <GoalProgress reverse={true} value={model.beaty} percentage={60} />
                            </div>
                            <div className="col-6 border">
                                <p>Użyteczność</p>
                                <GoalProgress reverse={true} value={model.utility} percentage={60} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default ModelCard