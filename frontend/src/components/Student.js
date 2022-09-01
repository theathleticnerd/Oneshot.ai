import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';

function Student() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/student');
        const items = await data.json();
        setItems(items);
    };

    return(
        <section>
            
            <div class="container-fluid">
                <h1 class="mt-5">Student</h1>
                <form method="POST" action="/addStudent">
                    <div class="input-group justify-content-center">
                        <div class="input-group-prepend">
                            <input type="text" name="studentName" placeholder="Student Name" class="form-control" />
                            <input type="text" name="batch_year" placeholder="Batch Year" class="form-control" />
                            <input type="submit" value="Send" class="btn btn-primary mb-2" />
                        </div>
                    </div>
                </form>

                {
                items.map(item => (
                    <div class="row padding">
                        <div class="alert alert-info rounded-pill" role="alert">
                            <i class="fa fa-user mr-2"></i> <i>{item.college.name} ({item.college.name}): {item.student_name}</i>
                        </div>
                    </div>       
                ))
                }
            </div>
        </section>
    );
}

export default Student;