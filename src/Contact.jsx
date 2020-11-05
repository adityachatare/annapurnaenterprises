import React, {useState} from "react";

const Contact = () =>{
  const [data, setData] = useState({
    fullname : "",
    phone : "",
    email : "",
    message:"",
});

const InputEvent = (event)=>{
  const{name, value} = event.target;

  setData((preVal)=>{
    return{
      ...preVal,
      [name] : value,
      
    };
  });
};
  const formsubmit = (e) =>{
    e.preventDefault();
    alert(`${data.fullname}`);
  };
    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form>
  <div class="form-group" onSubmit={formsubmit}>
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" name="name" value={data.fullname} onChange={InputEvent}/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Contact Number</label>
    <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Enter your contact number" name="contact" value={data.phone} onChange={InputEvent}/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email ID</label>
    <input type="email" class="form-control" id="exampleFormControlInput3" placeholder="Enter your Email ID" name="email" value={data.email} onChange={InputEvent}/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea4" rows="3" name="message" value={data.msg} onChange={InputEvent}></textarea>
  </div>
<div class="form-group">
   
  <button type="submit" class="btn btn-outline-primary mb-2">Submit</button>
  </div>
 
</form>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
};
export default Contact;