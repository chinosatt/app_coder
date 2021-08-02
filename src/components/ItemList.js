import Row from 'react-bootstrap/Row'
import Item from "./Item";

const ItemList = (productos) => {

    /*
    const [productos, setProductos] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const promiseProductos = new Promise((res,rej) => {
            setTimeout(() => {
                const get_productos = [
                    {id: 1001, title: "SSD Seagate 2.5'' 960Gb Sata3 Z1", price: "13100", pictureUrl: "https://www.quonty.com/img2/maxi/y/ya960vc1a001_00.jpg"},
                    {id: 1002, title: "Raton NGS GMX-100 Gaming Optico 2400Dpi USB Negro LED", price: "670", pictureUrl: "https://www.quonty.com/img2/maxi/g/gmx-100_1.jpg"},
                    {id: 1003, title: "Auriculares C/Microfono B-MOVE Typhoon Gaming Negro", price: "1130", pictureUrl: "https://www.quonty.com/img2/maxi/b/bg-aud08_1.jpg"},
                    {id: 1004, title: "Kingston Hx426C16Fb3/8 Hyperx FURY 8GB DDR4 2666Mh", price: "4950", pictureUrl: "https://www.quonty.com/img2/med/h/hx430c15fb3-16_00.jpg"},
                    {id: 1005, title: "Bateria Salicru 7Ah/12V PARA SAI UBT 12/7", price: "1800", pictureUrl: "https://www.quonty.com/img2/maxi/a/qtya0002565_00.jpg"},
                    {id: 1006, title: "Monitor Gaming ASUS Vp248H 24'' FHD 1MS HDMI VGA Negro", price: "14270", pictureUrl: "https://www.quonty.com/img2/maxi/a/qtyasu-mvp248h_00.jpg"},
                ]
                res(get_productos)
            }, 2000)
        })
        promiseProductos.then((array_productos) => {
            setProductos(array_productos)
            setIsLoaded(true)
        })
    }, [])
    
    if (!isLoaded) {
        return <Spinner animation="grow" variant="primary" />;
    } else {
        return (
            <Row xs={1} md={3} lg={4} >
                { productos.map( producto => (<Item id={producto.id} title={producto.title} price={producto.price} pictureUrl={producto.pictureUrl} />) ) }
            </Row>
        )
    }
    */

    console.log(productos);
    
    return (
        <Row xs={1} md={3} lg={4} >
            { productos.map( producto => (<Item id={producto.id} title={producto.title} price={producto.price} pictureUrl={producto.pictureUrl} />) ) }
        </Row>
    )

}
        
export default ItemList