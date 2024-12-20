import { useEffect, useState } from "react";
import CreationSection from "../../Components/CreationSection/CreationSection";
import Item from "../../Components/Item/Item";
import { HomeBody, ItemsContainer, MenuContainer } from "./Home.styles";
import { ItemsType } from "../../Types/ItemsType";
import { Link } from "react-router";

const Home = () => {

    const [token, setToken] = useState<string>('');
    const [items, setItems] = useState<ItemsType[]>([]);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    useEffect(()=> {
        const userDetails = JSON.parse(localStorage.getItem("user") || "{}");
        setToken(userDetails.token);

        const getAllTask = async () => {
            try{
                const response = await fetch("https://to-do-list-api-7qr4.onrender.com/task", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${userDetails.token}`
                    }
                });

                const data: ItemsType[] = await response.json();
                setItems(data || []);
            }catch(err){
                console.error(err);
            }
        }
    
        getAllTask()
    }, [token]);

    const createTask = async () => {
        try{

            const bodyRequested = {
                title: title,
                description: description
            }

            const response = await fetch("https://to-do-list-api-7qr4.onrender.com/task", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(bodyRequested)
            })

            location.reload();

            if(!response.ok){
                console.error("Request Error", response.status, response.statusText);
            }
        }catch(err){
            console.error(err);
        }
    }

    const statusChange = async (id: number, status: boolean) =>{
        try {
            const response = await fetch(`https://to-do-list-api-7qr4.onrender.com/task/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ status: !status })
            });

            location.reload();

            if(!response.ok){
                console.log("Error on fetch items");
            }
        } catch (err) {
            console.error(err);
        }
    }

    const deleteTask = async (id: number) => {
        try {
            const response = await fetch(`https://to-do-list-api-7qr4.onrender.com/task/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            location.reload();

            if(!response.ok){
                console.log("Error on fetch items");
            }
        } catch (err) {
            console.error(err);
        }
    }

    return(
        <HomeBody>

            <MenuContainer>
                <Link to="/login" className="link">Entrar na sua Conta</Link>
                <Link to="/register" className="link">Criar Conta</Link>
            </MenuContainer>

            <CreationSection 
                changeDescription={(e) => setDescription(e.target.value)}
                changeTitle={(e) => setTitle(e.target.value)}
                click={createTask}
            />

            <ItemsContainer>
                {items.length > 0 && items.map((item) => {
                    return(
                        <Item
                            key={item.id} 
                            title={item.title}
                            description={item.description}
                            status={item.status}
                            statusChange={() => statusChange(item.id, item.status)}
                            deleteClick={() => deleteTask(item.id)}
                        />
                    )
                })
            }
            </ItemsContainer>
        </HomeBody>
    )
}

export default Home;