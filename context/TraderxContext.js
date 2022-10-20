import { useState, useEffect } from "react"
import { createContext } from "react"
import { useContext } from "react"
import { 
    collection,
    getDoc,
    getDocs, 
    addDoc,
    updateDoc,
    doc,
    where,
    query,
    onSnapshot,
    arrayUnion,
    arrayRemove
} from "firebase/firestore"
import { useRouter } from "next/dist/client/router"
import { auth, db } from "../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const TraderxContext = createContext()

export function useAuth() {
    return useContext(TraderxContext)
}

export const TraderxProvider = ({children}) => {

    const router = useRouter()

    const [User, setUser] = useState([])
    const [Idea, setIdea] = useState([])
    const [News, setNews] = useState()
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const getUser = async() => {
            setLoading(true)

            const querySnapshot = await getDocs(collection(db, 'user'))
    
            setUser(querySnapshot.docs.map(doc => {
                return{
                    id: doc.id,
                    data: {
                        ...doc.data()
                    }
                }
            })
            )
        }

        const getIdea = async() => {
            const querySnapshot = await getDocs(collection(db, 'ideas'))
            
            setIdea(querySnapshot.docs.map(doc => {
                return{
                    id: doc.id,
                    data: {
                        ...doc.data()
                    }
                }
            }))
        }

        const fetchNews = async() => {
        const querySnapshot = await getDocs(collection(db, 'news'))

            setNews(querySnapshot.docs.map(doc => {
                return{
                    id: doc.id,
                    data: {
                        ...doc.data()
                    }
                }
            }
            ))
        }

        getUser()

        getIdea()

        fetchNews()

    }, [])

    const [singleIdea, setSingleIdea] = useState()

    const fetchSingleIdea = async(id) => {
        try {
            const querySnapshot = await getDoc(doc(db, 'ideas', id))
            setSingleIdea({...querySnapshot.data(), id: querySnapshot.id})
        }
        catch(error) {
            console.log(error)
        }
    }

    const [consolidatedDocument, setConsolidatedDocument] = useState()

    const consolidatedInvestmentDocument = async() => {
        const querySnapshot = await getDocs(collection(db, 'consolidatedInvestment'))
        setConsolidatedDocument(querySnapshot.docs.map(doc => {
            return{
                id: doc.id,
                data: {
                    ...doc.data()
                }
            }
        }))
    }

    const updateIdea = async (data, id) => {
        console.log(data, id)
        // db.collection("ideas").doc(id).update({})
        // const updateRef = doc(db, 'ideas', id)
		
		// updateDoc(updateRef, {
		// 	shareCode: shareCode,
		// 	shareName: shareName,
		// 	marketPrice: Number(marketPrice),
		// 	marketCap: Number(marketCap),
		// 	high: Number(high),
		// 	low: Number(low),
		// 	EPS: Number(EPS),
		// 	EPSPerc: Number(EPSPerc),
		// 	ROE: Number(ROE),
		// 	funds: Number(funds),
		// 	rating: Number(rating),
		// 	buyPrice: Number(buyPrice),
		// 	targetPrice: Number(targetPrice),
		// 	gain: Number(gain),
		// 	stopLoss: Number(stopLoss),
		// 	minInvestment: Number(minInvestment),
		// 	timeDuration: timeDuration,
		// 	description: description,
		// 	overview: overview,
		// 	image: image,
		// 	status: status,
		// })
    }

    const [singleUser, setSingleUser] = useState()
    const [ singleUserData, setSingleUserData ] = useState()

    const fetchSingleUser = () => {

        const colRef = collection(db, 'users')
        const q = query(colRef, where('email', '==', currentUser.email))

        onSnapshot(q, (snapshot) => {
            let user = []
            snapshot.docs.forEach((doc) => {
                user.push({ ...doc.data(), id: doc.id })
                setSingleUser(user[0].id)
                setSingleUserData(user[0])
            })
        })

    }

    const addToWishList = (singleUser, id) => {
        const docRef = doc(db, 'users', singleUser)
        if(currentUser){
            updateDoc(docRef, {
                wishlist: arrayUnion(id)
            })
            .then(() => {
                toast.success('Added to wishlist')
            })
        }
        else{
            toast.error('Sign in with an account')
        }
    }

    const removeFromWishList = async (id) => {
        fetchSingleUser()
        console.log(id)
        try{
            await updateDoc(doc(db, 'users', singleUser), {
                wishlist: arrayRemove(id)
            })
            .then(() => {
                toast('Successfully removed from wishlist')
                router.reload(window.location.pathname)
            })
        } catch(err) {
            console.log(err)
        }
    }

    const [ wishlist, setWishlist ] = useState()

    const getWishlistedIdeas = async() => {
        fetchSingleUser()
        try{
            const querySnapshot = await getDoc(doc(db, 'users', singleUser))
            setWishlist(querySnapshot.data().wishlist)
        }
        catch(error) {
            console.log(error)
        }
    }

    const [listedIdeas, setListedIdeas] = useState()
    let ideaData = []
    let count = 0

    const wishlistedIdeaData = async (wish) => {
        try{
            const docRef = doc(db, 'ideas', wish)
            const querySnapshot = await getDoc(docRef)
            ideaData.push({data: querySnapshot.data(), id: querySnapshot.id})
            setListedIdeas(ideaData)
        } catch(err) {
            console.log(err)
        }
    }

    const investedUser = async (investment, idea, consolidatedDocId) => {

        const ideaDocRef = doc(db, 'ideas', idea.id)
        
        fetchSingleUser()

        const userDocRef = doc(db, 'users', singleUser)

        consolidatedInvestmentDocument()

        const consolidatedRef = doc(db, 'consolidatedInvestment', consolidatedDocId)

        fetchSingleIdea()

        let totalSharesBought = singleIdea?.investment?.totalSharesBought
        let totalInvestment = singleIdea?.investment?.totalInvestment

        let consolidatedAmount = consolidatedDocument[0]?.data.consolidatedAmount
        let consolidatedShares = consolidatedDocument[0]?.data.consolidatedShares

        if(currentUser){
            let investedAmount = investment.sharesBought * investment.buyPrice
            updateDoc(userDocRef, {
                portfolio: arrayUnion({
                    idea: idea.id,
                    shareCode: investment.shareCode,
                    buyPrice: Number(investment.buyPrice),
                    targetPrice: Number(investment.targetPrice),
                    sharesBought: Number(investment.sharesBought),
                    stopLoss: Number(investment.stopLoss),
                    investedAmount: Number(investedAmount),
                })
            })

            totalSharesBought += investment.sharesBought
            totalInvestment += investedAmount

            updateDoc(ideaDocRef, {
                investors: arrayUnion(singleUser),
                investment: {
                    totalSharesBought: Number(totalSharesBought),
                    totalInvestment: Number(totalInvestment)
                }
            })

            consolidatedShares += investment.sharesBought
            consolidatedAmount += investedAmount

            updateDoc(consolidatedRef, {
                consolidatedAmount: consolidatedAmount,
                consolidatedShares: consolidatedShares,
                investors: arrayUnion(singleUser),
                investment: arrayUnion({
                    investedIdea: idea.id,
                    shareCode: idea.shareCode,
                    sharesBought: Number(investment.sharesBought),
                    buyPrice: Number(investment.buyPrice),
                    investedAmount: Number(investedAmount)
                })
            })

            .then(() => {
                toast.success('Investment is successful.')
            })
        }
        else{
            toast.error('Sign in with an account')
            setTimeout(() => {
                router.push('/singup')
            }, 4000)
        }
    }

    const [singleNews, setSingleNews] = useState()

    const getSingleNews = async(id) => {
        try{
            const querySnapshot = await getDoc(doc(db, 'news', id))
            setSingleNews(querySnapshot.data())
        } catch(error) {
            console.log(error)
        }
    }
    
    const [ currentUser, setCurrentUser ] = useState()
    const databaseRef = collection(db, 'users')

    const signup = async ({ email, password, firstName, lastName, number }) => {
        setLoading(true)
        const signedUser = await createUserWithEmailAndPassword(auth, email, password)
        if(signedUser.user.accessToken !== undefined){
            //Add data to firebase
            addDoc(databaseRef, {
                email: email,
                firstName: firstName,
                lastName: lastName,
                phoneNumber: number
            })
        }
    }
    
    const login = async ({ email, password }) => {
        try{
            const loginUser = await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                toast.success('Logged in.')
                router.push('/')
            })
        }
        catch(err) {
            toast.error('Email/Password is wrong!')
            console.log(err)
        }
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
    }, [])


    function logout () {
        signOut(auth)
        .then((response) => {
            if(!currentUser){
                return toast.success('Successfully logged out of your account')
            } else{
                return toast.error(response)
            }
        })
    }

    const adminLogin = ({ admins, id, password }) => {
        let flag = false

        admins?.map(admin => {
            if(admin.id === id && admin.password === password){
                flag = true
                return
            }
        })
    }

    const value = {
        User,
        Idea,
        News,
        currentUser,
        singleIdea,
        singleNews,
        singleUser,
        wishlist,
        listedIdeas,
        singleUserData,
        consolidatedDocument,
        getSingleNews,
        signup,
        login,
        logout,
        fetchSingleIdea,
        updateIdea,
        addToWishList,
        removeFromWishList,
        adminLogin,
        fetchSingleUser,
        getWishlistedIdeas,
        wishlistedIdeaData,
        investedUser,
        consolidatedInvestmentDocument,
    }

    return(
        <div>
            <TraderxContext.Provider value={value}>
                {!loading && children}
            </TraderxContext.Provider>
            <ToastContainer 
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}
