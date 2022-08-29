const type = {
  monserrat: 'Montserrat-Regular',
  monserratMed: 'Montserrat-Medium',
  monserratMedlt: 'Montserrat-MediumItalic',
  monserratDemi: 'Montserrat-SemiBold',
  monserratDemilt: 'Montserrat-SemiBoldItalic',
  monserratBold: 'Montserrat-Bold',
  monserratBoldlt: 'Montserrat-BoldItalic',
  monserratItalic: 'Montserrat-Italic',
};

const size = {
  h1: 37,
  h2: 33,
  h3: 29,
  h4: 25,
  h5: 19,
  h6: 18,
  input: 17,
  regular: 13,
  medium: 17,
  small: 11,
  tiny: 8.5,
  large: 19,
};

const style = {
  bold: {
    fontFamily: type.monserratBold,
  },
  h1: {
    fontFamily: type.monserrat,
    fontSize: size.h1,
  },
  h2: {
    fontFamily: type.monserratBold,
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.monserrat,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.monserrat,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.monserrat,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.monserrat,
    fontSize: size.h6,
  },
  normal: {
    fontFamily: type.monserrat,
    fontSize: size.regular,
  },
  description: {
    fontFamily: type.monserrat,
    fontSize: size.medium,
  },
};

export default {
  type,
  size,
  style,
};
