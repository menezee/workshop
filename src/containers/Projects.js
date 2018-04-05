import React, { Component } from 'react'

class Projects extends Component {

    render() {
        const { greeting } = this.props

        return (
            <div>
                <p>
                    { greeting }
                </p>
            </div>
        )
    }
}

export default Projects
