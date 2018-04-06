import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Project } from '../components'

class Projects extends Component {

    render() {

        const { location: {state: { project} }, projects } = this.props
        const projectsList = projects[project].map((proj, index) => (
            <Project key={index} name={proj} />
        ))

        return (
            <div style={{display: 'flex'}}>
                {projectsList}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    projects: state.ProjectReducer.projects
})

export default connect(mapStateToProps)(Projects)