import ItemListContainer from "./ItemListContainer";
import ItemCount from "./ItemCount";

const Content = () =>
        <content>
            <ItemListContainer greeting="Productos Destacado"/>
            <ItemCount stock = {5} initial = {1} />
        </content>

export default Content