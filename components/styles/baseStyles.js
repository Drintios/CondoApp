import { StyleSheet } from 'react-native';
import colors from './colors'

export default StyleSheet.create({
  content: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 40
  },
  contactWrapper: {
    marginTop: 50,
    flex: 2,
  },
  contactBoxLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    margin: 4,
    backgroundColor: colors.azul
  },
  contactBoxRight: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    margin: 4,
    backgroundColor: colors.white
  },
  contactPhone: {
    marginTop: 10,
    fontSize: 20
  },
  contactImage: {
    marginTop: 20
  },
  contactTitle: {
    marginLeft: 10,
    marginTop: 10,
    fontFamily: 'Roboto',
    fontSize: 20,
    color: 'blue'
  },
  contactDescTitle: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: "#999"
  },
  contactDesc: {
    fontFamily: 'Roboto',
    fontSize: 13,
    color: "#999"
  },
  text: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxMessage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: colors.white,
    position: 'absolute',
    left: 40,
    marginBottom: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.gainsboro,
  },
  boxEx: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 200,
    marginTop: 18,
    marginBottom: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.gainsboro,
  },
  boxWrite: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 280,
    marginTop: 18,
    marginBottom: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.gainsboro,
  },
  boxCheck: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: colors.white,
    position: 'absolute',
    left: 125,
    marginTop: 18,
    marginBottom: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.gainsboro,
  },
  textInput: {
    width: 250,
    height: 60,
    backgroundColor: 'transparent',
  },
  LogoP: {

    width: 250, //por cada 50
    height: 35, // sube 7 hei
    marginBottom: 10,
  },
  backgroundImage: {
    //  alignItems: 'center',
    //  justifyContent: 'center',
    flex: 2,
    width: null,
    height: null,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  header: {
    height: 40,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'transparent',
    zIndex: 10
  },
  headerIn: {
    height: 75,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: colors.azul,
    zIndex: 10
  },
  content: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 40
  },
  footer: {
    height: 40,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent'
  },
  footerIn: {
    height: 60,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.white,
    flex: .5,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#333',
    marginBottom: 10
  },
  boxf: {
    alignItems: 'center',
    width: 72,
    height: 100,
    backgroundColor: '#333',
    marginBottom: 10
  },
  boxFooterHomeIcons: {
    marginTop: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: colors.gainsboro,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.gainsboro,
  },
  boxFooterIcons: {
    marginTop: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.gainsboro,
  },
  boxc0: {
    backgroundColor: colors.white
  },
  box3: {
    alignItems: 'center',
    width: 450,
    height: 200,
    backgroundColor: colors.white,
    marginBottom: 10,
    marginTop: 10
  },
  userPM: {
    marginLeft: 10,
    marginTop: 20,
    fontFamily: 'Roboto',
    fontSize: 20,
    color: colors.azul,
    marginBottom: 7
  },
  box4: {
    width: 450,
    height: 85,
    backgroundColor: colors.white,
    marginBottom: 5,
    marginTop: 5,
    flex: .5,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  boxc1: {
    backgroundColor: '#2196F3'
  },
  boxc2: {
    backgroundColor: '#8BC34A'
  },
  boxc3: {
    backgroundColor: '#e3aa1a'
  },
  boxinLef: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 200,
    backgroundColor: colors.white,
    position: 'absolute',
    left: 35,
    marginBottom: 10
  },
  boxinLef2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 125,
    height: 70,
    backgroundColor: colors.white,
    position: 'absolute',
    left: 35,
    marginBottom: 10
  },
  boxinRight: {
    width: 250,
    height: 250,
    backgroundColor: colors.white,
    position: 'absolute',
    left: 200,
    marginTop: 5,
    marginBottom: 10
  },
  boxinRight2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 125,
    height: 70,
    backgroundColor: colors.white,
    position: 'absolute',
    left: 305,
    marginBottom: 10
  },
  boxinCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 75,
    backgroundColor: colors.white,
    position: 'absolute',
    left: 125,
    marginBottom: 10
  },
  boxinCenterM: {
    //justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 75,
    backgroundColor: colors.white,
    position: 'absolute',
    marginBottom: 10,
    marginTop: 100,
  },
  boxinBot: {
    alignItems: 'center',
    width: 450,
    height: 25,
    position: 'absolute',
    top: 180,
    bottom: 0,
    marginBottom: 10
  },
  boxinBotBor: {
    alignItems: 'center',
    width: 450,
    height: 25,
    borderBottomColor: "#ddd",
    borderBottomWidth: 300,
    position: 'absolute',
    top: 190,
    bottom: 0,
    marginTop: 8,
    marginBottom: 10
  },
  boxinBotBor2: {
    alignItems: 'center',
    width: 450,
    height: 10,
    borderBottomColor: "#ddd",
    borderBottomWidth: 300,
    position: 'absolute',
    top: 80,
    bottom: 0,
    marginTop: 3,
    marginBottom: 10
  },
  wbox: {
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
    marginBottom: 10
  },
  whbox: {
    width: 100,
    height: 50,
    backgroundColor: 'transparent',
    marginBottom: 10
  },
  user: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: "#FFF",
    backgroundColor: "#4379eb"
  },
  userP: {
    fontFamily: 'Roboto',
    fontSize: 25,
    color: colors.azul,
    marginBottom: 7

  },
  tittle: {
    fontFamily: 'Roboto',
    fontSize: 40,
    color: "#999",
    marginTop: 35,
    marginBottom: 10
  },
  tittle2: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: "#999",
    marginTop: 0,
    marginBottom: 5
  },
  minitext: {
    fontFamily: 'Roboto',
    fontSize: 13,
    color: "#999",
    marginBottom: 10
  },
  minitextFooter: {
    marginTop: 0,
    fontFamily: 'Roboto',
    fontSize: 13,
    color: "#999",
    marginBottom: 10

  },
  minitext2: {
    fontFamily: 'Roboto',
    fontSize: 13,
    color: "#999",
    marginBottom: 0

  },

  logout: {
    marginTop: 30,
  },
  logoutm: {
    marginTop: 5,
    marginLeft: 10,
    marginTop: 30,
  },
  trash: {
    position: 'absolute',
    right: 15,
    marginTop: 5,
    marginLeft: 10,
    marginTop: 30,
  },
  reminder: {
    position: 'absolute',
    right: 50,
    marginTop: 5,
    marginLeft: 10,
    marginTop: 30,
  }
});
