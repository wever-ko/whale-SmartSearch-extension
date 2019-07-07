
export const queryToWord = (key: string, value: string | object): string => {
  if (value==='')
    return '';

  switch(key){
    case 'exact':
      return `"${value}" `;
    case 'or':
      return `OR ${value} `;
    case 'exclude':
      return `-${value} `;
    case 'site':
      return `site:${value} `;
    case 'type':
      return `type:${value} `;
    case 'range':
      if (value.min==='' || value.max==='')
        return '';
      return `${value.min}..${value.max} `
    default:
      return '';
  }
}

export const toGoogleQueryString = (param: object): string => {
  let result = ''
  for(let key in param){
    if ( param.hasOwnProperty(key) ) {
      result += queryToWord(key, param[key]);
    }
  }
  return result;
}
