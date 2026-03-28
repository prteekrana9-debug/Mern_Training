function Student(props) {
    console.log("propes recived in student component:", props);

    return (
        <div>
            <h2>student component</h2>
            <p>Name: {props.name}</p>
            <p>age: {props.age}</p>
        </div>
    );
}

export default Student;