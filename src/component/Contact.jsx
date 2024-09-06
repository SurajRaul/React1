export function Contact(){
    return(
        <>
     <div className="container mt-3">
    <h1>Contact <span className="text-primary">us</span></h1>
    <ul className="list-unstyled mt-5">
        <li className="mb-3">
            <span className="fw-bold">Reservation:</span> 
            <span className="d-block"><a href="tel:+91-11-6911-0606" className="text-decoration-none">+91-11-6911-0606</a></span>
        </li>
        <li className="mb-3">
            <span className="fw-bold">Hotel:</span> 
            <span className="d-block"><a href="tel:+91-22-6632-5757" className="text-decoration-none">+91-22-6632-5757</a></span>
        </li>
        <li className="mb-3">
            <span className="fw-bold">Facsimile:</span> 
            <span className="d-block">+91-22-6632-4142</span>
        </li>
        <li className="mb-3">
            <span className="fw-bold">Email:</span> 
            <span className="d-block"><a href="mailto:reservations@marriottgroup.com" className="text-decoration-none">reservations@marriottgroup.com</a></span>
        </li>
        <li className="mb-3">
            <span className="fw-bold">Address:</span>
            <span className="d-block">
                Nariman Point<br />
                Mumbai - 400 021 India
            </span>
        </li>
        <li className="mb-3">
            <span className="fw-bold">General Manager:</span> 
            <span className="d-block">Raju Rastogi</span>
        </li>
        <li className="mb-3">
            <span className="fw-bold">E-mail Address:</span> 
            <span className="d-block"><a href="mailto:Generalmanager.mumbai@marriotthotels.com" className="text-decoration-none">Generalmanager.mumbai@marriotthotels.com</a></span>
        </li>
    </ul>
    <div className="mt-5 ms-3">
    <iframe width="500" height="315" src="https://www.youtube.com/embed/uB4LGz8MmwQ?si=MBMz8ONfcbUZT4Ni" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</div>
        </>
    )
}