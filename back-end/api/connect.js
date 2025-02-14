import { MongoClient} from "mongodb";

const URI = 
"mongodb+srv://zeromeiamk:jonielmk0@cluster0.ep07dft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("mkSongs");
