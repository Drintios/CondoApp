import Icon from 'react-native-vector-icons/FontAwesome';
import colors from './baseStyles';

const MessageIcon = (<Icon name="envelope" size={26} color={colors.gainsboro}/>);
const MessageIconf = (<Icon name="envelope-o" size={26} color={colors.gainsboro}/>);
const AddressIconf = (<Icon name="address-card-o" size={26} color={colors.gainsboro}/>);
const HomeIconf = (<Icon name="home" size={26} color={colors.white}/>);
const PlusIconf = (<Icon name="plus" size={26} color={colors.gainsboro}/>);
const ReminderIcon = (<Icon name="clock-o" size={26} color={colors.white}/>);
const ExIcon = (<Icon name="times" size={26} color={colors.freeSpeechRed}/>);
const LogoutButton = (
  <Icon.Button name="arrow-left" backgroundColor={colors.azul} color={colors.white}>
    <Text style={{fontFamily: 'Roboto', fontSize: 20, color:{colors.white}}}>Logout</Text>
  </Icon.Button>
);
const UserIcon = (<Icon name="user-circle-o" size={110} color={colors.gainsboro}/>);
const BackButton = (<Icon name="arrow-left" backgroundColor={colors.azul} size={26} color={colors.white}/>);
const TrashIcon = (<Icon name="trash" size={26} color={colors.white}/>);
const CheckIcon = (<Icon name="check" size={26} color={colors.freeSpeechGreen}/>);
const PhoneIcon = (<Icon name="phone" size={26} color={colors.freeSpeechGreen}/>);
const EditIcon = (<Icon name="pencil-square-o" size={26} color={colors.havelockBlue}/>);