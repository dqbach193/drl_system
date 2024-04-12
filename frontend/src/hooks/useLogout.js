import { useAuthContext } from './useAuthContext'
import { useDRLContext } from './useDRLContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: drlDispatch } = useDRLContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    drlDispatch({type: 'SET_ALL_DRL', payload: null})
  }

  return { logout }
}