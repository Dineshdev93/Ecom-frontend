import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../Userauth/loginSignup.scss'
import Spiner from '../Loader/Spiner'
import { useNavigate, useParams } from 'react-router-dom'
import { Edituseraccount } from '../../redux/slice/userAuthSlice/UserSlice'
import { toast } from 'react-toastify'

const EditProfile = () => {

  const { LoggeduserData, loading } = useSelector((state) => state.userauth);

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [userprofile, setUserprofile] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const userId = params.id

  useEffect(() => {
    if (LoggeduserData.length > 0) {
      setFirstname(LoggeduserData[0].firstname)
      setLastname(LoggeduserData[0].lastname)
    }
  }, [LoggeduserData])

  const handlesubmit = async (e) => {
    e.preventDefault()

    const formdata = new FormData()
    formdata.append("firstname", firstname)
    formdata.append('lastname', lastname)
    formdata.append("userprofile", userprofile)


    const headers = {
      "Content-Type": "multipart/form-data",
    };

    const data = {
      userId,
      formdata,
      headers
    }

    try {
      dispatch(Edituseraccount(data)).then((res) => {
        if (res) {
           navigate("/userprofile")
          toast("User Account updated !")
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login-signup-scss">
      {loading ? (
        <Spiner />
      ) : (
        <section className="container signup_login_form_caontainer mb-5">
          <div className="row justify-content-center">
            <div className="col-md-6  register_user">
              <h1 className="text-center mt-3">Edit Your Account</h1>
              <form>
                <div className="mt-2 mb-3">
                  <label for="exampleInputname" className="form-label">
                    First Name
                  </label>{" "}
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputname"
                    aria-describedby="emailHelp"
                    placeholder="Enter first name"
                    name="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                <div className="mt-2 mb-3">
                  <label for="exampleInputlast" className="form-label">
                    Last Name
                  </label>{" "}

                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputlast"
                    aria-describedby="emailHelp"
                    placeholder="Enter first name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    name="lastname"
                  />
                </div>
                {/* <div className="mt-2 mb-3">
                  <label for="exampleInputImg" className="form-label">
                    Upload Image
                  </label>{" "}

                  <input
                    type="file"
                    className="form-control"
                    id="exampleInputimg"
                    aria-describedby="emailHelp"
                    placeholder="Enter first name"
                    name="userprofile"
                    onChange={(e) => setUserprofile(e.target.files[0])}
                  />
                </div> */}
                <div className="btn_register">
                  <button className="handle-Submit" onClick={handlesubmit}>
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default EditProfile
