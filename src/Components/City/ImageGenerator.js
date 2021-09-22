import Kharkiv from '../../assets/images/Kharkiv.jpg'
import Odessa from '../../assets/images/Odessa.jpg';
import Kiev from '../../assets/images/Kiev.jpg';

export default function ImageGenerator(url) {
    switch (url){
        case 'Kharkiv':
            return(Kharkiv)
        case 'Odessa':
            return(Odessa)
        case 'Kiev':
            return(Kiev)
        default:
            break;
    }

}
