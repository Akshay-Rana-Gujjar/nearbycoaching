

export default function FacultyCard({
    imgSrc,
    name,
    job,
    education,
    yoe
}) {


    return <>
        <div className="bg-white rounded border boder-dark shadow-sm">
            <img className="img-fluid w-100 rounded-circle1 1border" src={imgSrc} alt={name} style={{
                aspectRatio: 1,
                objectFit: "cover",
                objectPosition: "top"
            }} />
            <div className="p-3">

                <div className="h4">{name}</div>
                <div className="fw-bold  text-truncate " >{job}</div>
                <div className="text-muted" >{education}</div>
                <div className="text-muted" >{yoe}</div>
            </div>
        </div>
    </>
}