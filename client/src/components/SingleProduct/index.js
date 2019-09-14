import React from 'react';
import { delectProduct } from '../../services/apiService'
import { Redirect } from 'react-router-dom'

const SingleProduct = (props) => {
    handleDelecte = async (id) => {
        await delectProduct(id)
        await props.history.push(`/dasgboard`)
    }

const renderProducts = () => {
    if(props.location.state) {
        return props.location.state.products.map(product => {
            return (
                <div className="single-routine">
                <div key={routine.id}>{routine.startTime} - {routine.endTime} : {routine.description}
                </div>
                <div>
                    <button className="update-button" onClick={()=> props.history.push('/dashboard/routine/:routine_id/update', {routineId: routine.id})}>Update</button>
                </div>
                <br />
                <div>
                    <button className="delete-button" onClick={() => handleDelete(routine.id)}>Delete</ button>
                </div>
                </div>

                )
            })
        }
    }

    return (
        <div>
            {renderProducts}
        </div>
    )
}

export default SingleProduct