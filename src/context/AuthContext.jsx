import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

export function AuthContextPrivider({ children }) {
    const [user, setUser] = useState({});
    const [videoTrail, setVideoTrail] = useState('');
    const [serachdata, setSearchdata] = useState([])
    const navigate = useNavigate();

    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, "users", email), { savedMovies: [] })
    }

    function local_enter() { localStorage.setItem("bool", JSON.stringify(true)) }
    function local_exit() { localStorage.setItem("bool", JSON.stringify(false)) }
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth)
    }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         setUser(currentUser)
    //     })
    //     return () => {
    //         unsubscribe();
    //     };
    // })

    const Frequentlydata = [
        { title: "What is Netflix", desc: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There is always something new to discover and new TV shows and movies are added every week!" },
        { title: "How much does Netflix cost?", desc: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts." },
        { title: "Where can I watch", desc: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere." },
        { title: "How do I cancel", desc: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." },
        { title: "Is Netflix for Kids?", desc: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see." },
        { title: "Why am I seeing this language?", desc: "Your browser preferences determine the language shown here." }
    ]

    function PasstoVideo(arg = videoTrail) {
        setVideoTrail(arg)
        navigate('/video')
    }


    const [open, setOpen] = useState(false);
    const [modal, setModal] = useState({});
    const handleOpen = (arg) => {
        setOpen(true);
        setModal(arg);
    };
    const handleClose = () => setOpen(false);
    return (
        <AuthContext.Provider value={{ signUp, logIn, logOut, user, Frequentlydata, serachdata, setSearchdata, PasstoVideo, setVideoTrail, videoTrail, local_enter, local_exit, handleClose, handleOpen, open, modal }}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}