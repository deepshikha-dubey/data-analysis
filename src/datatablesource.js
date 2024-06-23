export const userColumns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: "user", headerName:"User", width:230, renderCell:(params)=>{
                return(
                    <div className="cellWithImg">
                        <img src={params.row.img} className="cellImg" alt ="Avatar" />
                    {params.row.username}
                    </div>
                );
            }, 

        },
        {
            field:"email", headerName:"Email", width:230,
        },
        {
            field:"age", headerName:"Age", width:100,
        },
        {
            field:"status", headerName:"Status", width:160, renderCell:(params)=>{
                return(
                    <div className={`cellWithStatus ${params.row.status} `}>{params.row.status}</div>
                )
            }
        },
];

// Temprary data

export const userRows = [
    {
        id: 1,
        username: "Deepshikha",
        img: "https://4.bp.blogspot.com/-BHhUazKytmw/VbCfWPqrOJI/AAAAAAAAB7c/qj6WVX3du-s/s1600/51b91bba5a3fd9b6c8b9c53bc0ab6c65.jpg",
       
        status: "active",
        email: "dubeydeepshikha1707@gmail.com",
        age: 32,
    },
    {
        id: 2,
        username: "Jaime Lannister",
        img: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA?rs=1&pid=ImgDetMain",
        status: "passive",
        email: "2snow@gmail.com",
        age: 45,
    },
    {
        id: 3,
        username: " Lannister",
        img: "https://th.bing.com/th/id/OIP.s4vVNdM0jvjsLEjj01VDgwAAAA?rs=1&pid=ImgDetMain",
        status: "pending",
        email: "3snow@gmail.com",
        age: 42,
    },
    {
        id: 4,
        username: "Stark",
        img: "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
        status: "active",
        email: "4snow@gmail.com",
        age: 42,
    },
    {
        id: 5,
        username: "Targaryen",
        img: "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
        status: "passive",
        email: "5snow@gmail.com",
        age: 42,
    },
    

]