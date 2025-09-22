type ProfileCard={
    nama:string;
    alamat:string;
    hobi:String;
}

const ProfileCard=()=>{
    const nama = "Huha";
    const alamat= "Didepan";
    const hobi="Simping";

    return (
        <div className="container">
        <div className="pcard">
            <p>Nama: {nama}</p>
            <p>Alamat:{alamat}</p>
            <p>Hobi:{hobi}</p>
        </div></div>
    );
};
export default ProfileCard