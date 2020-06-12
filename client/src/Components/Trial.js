import React, {useEffect} from 'react'
import PageOne from './ReusableComp/PageOne'
import ButterToast from 'butter-toast'

function Trial() {

    useEffect(() => {
        return () => {
            ButterToast.dismissAll()
        }
    }, [])

    return (
        <div>
            <PageOne />
        </div>
    )
}

export default Trial
