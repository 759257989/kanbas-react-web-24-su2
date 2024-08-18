// import * as client from "./client";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setCurrentUser } from "./reducer";
// export default function Profile() {
//   const [profile, setProfile] = useState<any>({});
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const fetchProfile = async () => {
//     try {
//       const account = await client.profile();
//       // console.log("account: ", account)
//       setProfile(account);
//     } catch (err: any) {
//       navigate("/Kanbas/Account/Signin");
//     }
//   };

//   const signout = async () => {
//     await client.signout();
//     dispatch(setCurrentUser(null));
//     navigate("/Kanbas/Account/Signin");
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, []);
//   return (
//     <div className="wd-profile-screen">
//       <h1>Profile</h1>
//       {profile && (
//         <div>
//           <label>Username</label>
//           <input
//             className="wd-username form-control mb-2"
//             value={profile.username}
//             onChange={(e) =>
//               setProfile({ ...profile, username: e.target.value })
//             }
//           />
//           <label>Password</label>
//           <input
//             className="wd-password form-control mb-2"
//             value={profile.password}
//             onChange={(e) =>
//               setProfile({ ...profile, password: e.target.value })
//             }
//           />
//           <label>Firstname</label>
//           <input
//             className="wd-firstname form-control mb-2"
//             value={profile.firstName}
//             onChange={(e) =>
//               setProfile({ ...profile, firstName: e.target.value })
//             }
//           />
//           <label>Lastname</label>
//           <input
//             className="wd-lastname form-control mb-2"
//             value={profile.lastName}
//             onChange={(e) =>
//               setProfile({ ...profile, lastName: e.target.value })
//             }
//           />
//           <label>Date of birth</label>
//           <input
//             className="wd-dob form-control mb-2"
//             value={profile.dob}
//             onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
//             type="date"
//           />
//           <label>Email</label>
//           <input
//             className="wd-email form-control mb-2"
//             value={profile.email}
//             onChange={(e) => setProfile({ ...profile, email: e.target.value })}
//           />
//           <label>Role</label>
//           <select
//             className="wd-role form-control mb-2"
//             value={profile.role}
//             onChange={(e) => setProfile({ ...profile, role: e.target.value })}
//           >
//             <option value="USER">User</option>{" "}
//             <option value="ADMIN">Admin</option>
//             <option value="FACULTY">Faculty</option>{" "}
//             <option value="STUDENT">Student</option>
//           </select>

//           <button
//             onClick={signout}
//             className="wd-signout-btn btn btn-danger w-100"
//           >
//             Sign out
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }


import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);


  const fetchProfile = async () => {
    try {
      const account = await client.profile();
      setProfile(account);
    } catch (err: any) {
      navigate("/Kanbas/Account/Signin");
    }
  };

  const saveProfile = async () => {
    try {
      await client.updateProfile(currentUser._id,profile);
      // Optionally, you can dispatch an action to update the current user in the global state
      dispatch(setCurrentUser(profile));
      alert("Profile updated successfully!");
    } catch (err: any) {
      alert("Failed to update profile. Please try again.");
    }
  };

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="wd-profile-screen">
      <h1>Profile</h1>
      {profile && (
        <div>
          <label>Username</label>
          <input
            className="wd-username form-control mb-2"
            value={profile.username}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <label>Password</label>
          <input
            className="wd-password form-control mb-2"
            value={profile.password}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
            type="password"
          />
          <label>Firstname</label>
          <input
            className="wd-firstname form-control mb-2"
            value={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <label>Lastname</label>
          <input
            className="wd-lastname form-control mb-2"
            value={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <label>Date of birth</label>
          <input
            className="wd-dob form-control mb-2"
            value={profile.dob}
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            type="date"
          />
          <label>Email</label>
          <input
            className="wd-email form-control mb-2"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <label>Role</label>
          <select
            className="wd-role form-control mb-2"
            value={profile.role}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>

          <button
            onClick={saveProfile}
            className="wd-save-btn btn btn-danger w-100 mb-2"
          >
            Save Profile
          </button>

          <button
            onClick={signout}
            className="wd-signout-btn btn btn-dark w-100"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
