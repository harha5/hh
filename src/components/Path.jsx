import {Link} from 'react-router-dom'

const Path = ({link, way}) => {
  return (
    <li className='text-white'>
    <Link className=' bg-green-600 rounded-md'  to={way}>{link}</Link>
  </li>
  )
}

export default Path