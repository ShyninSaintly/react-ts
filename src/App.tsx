import Card, {CardVariant} from './components/Card.tsx';
import UserList from "./components/UserList";
import {IUser} from "./types/types";

const App = () => {
const users:IUser[]=[
    {id:1,name:'Gleb',email:'gleb@gleb.com',adress:{city:'Moscow',street:'Yudkowsky',zipcode:'123'}},
    {id:2,name:'Kemal',email:'kemal@kemal.com',adress:{city:'Krim',street:'Sevastopol',zipcode:'321'}}
];
    return (
        <div>
            <Card  variant={CardVariant.outlined} width='200px' height='200px'>
                <button>кнопка</button>
            </Card>
            <UserList users={}/>
        </div>
    );
};

export default App;



















