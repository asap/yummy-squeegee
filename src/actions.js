/*
 * Action Types
 */

export const REQUEST_AWWZ = 'REQUEST_AWWZ'
export const RECEIVE_AWWZ = 'RECEIVE_AWWZ'
export const CURRENT_AWW = 'CURRENT_AWW'
export const SELECT_AWW = 'SELECT_AWW'

/*
 * Action Creators
 */

export function currentAww(aww) {
  return {
    type: CURRENT_AWW,
    currentAww
  }
}

export function selectAww(aww) {
  aww.resolutions.forEach(function (resolution) {
    resolution.url = decodeHTMLEntities(resolution.url)
  });

  return {
    type: SELECT_AWW,
    aww: aww.resolutions[aww.resolutions.length-1]
  }
}

function requestAwwz (awwz) {
  return {
    type: REQUEST_AWWZ,
    awwz
  }
}

function receiveAwwz(awwz, json) {
  let myAwwz = json.data.children.filter(child => IsValidAww(child.data))
            .map(child => parseData(child.data))

  let currentAww = myAwwz[0].resolutions[myAwwz[0].resolutions.length-1];

  return {
    type: RECEIVE_AWWZ,
    currentAww: currentAww,
    awwz: myAwwz,
    receivedAt: Date.now()
  }
}

/*
 * Helpers
 */

function decodeHTMLEntities (str) {
  // 'Borrowed' from http://stackoverflow.com/questions/5796718/html-entity-decode
  var element = document.createElement('div');
  if(str && typeof str === 'string') {
    // strip script/html tags
    str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
    str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
    element.innerHTML = str;
    str = element.textContent;
    element.textContent = '';
  }

  return str;
}

function parseData(item) {
  let resolutions = item.preview.images[0].resolutions

  resolutions.forEach(function (resolution) {
    resolution.url = decodeHTMLEntities(resolution.url)
  });

  return {
    thumb: item.thumbnail,
    source: item.url,
    resolutions: resolutions
  }
}

function IsValidAww(aww) {
  return (!aww.over_18 && aww.thumbnail !== 'self')
}

function fetchAwwz(awwz) {
  return dispatch => {
    dispatch(requestAwwz(awwz))
    return fetch('https://www.reddit.com/r/aww.json')
      .then(req => req.json())
      .then(json => dispatch(receiveAwwz(awwz, json)))
  }
}

export function getMoreAwwz (awwz) {
  console.warn("TBD - I haven't quite figured that part out yet.")
}

export function getThaAwwz (awwz) {
  return (dispatch, getState) => {
    return dispatch(fetchAwwz(awwz))
  }
}
