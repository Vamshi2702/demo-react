import React from 'react'

export default function TextForm(props) {
    return (
        <div>
            <div class="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <label for="formFile" class="form-label">Default file input example</label>
                <input style={{ backgroundColor: props.mode === 'dark' ? '#1d1d1d' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} class="form-control" type="file" id="formFile" />
            </div>
            <div class="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <label for="formFileMultiple" class="form-label">Multiple files input example</label>
                <input style={{ backgroundColor: props.mode === 'dark' ? '#1d1d1d' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} class="form-control" type="file" id="formFileMultiple" multiple />
            </div>
            <div class="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <label for="formFileDisabled" class="form-label">Disabled file input example</label>
                <input style={{ backgroundColor: props.mode === 'dark' ? '#1d1d1d' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} class="form-control" type="file" id="formFileDisabled" disabled />
            </div>
            <div class="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <label for="formFileSm" class="form-label">Small file input example</label>
                <input style={{ backgroundColor: props.mode === 'dark' ? '#1d1d1d' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} class="form-control form-control-sm" id="formFileSm" type="file" />
            </div>
            <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <label for="formFileLg" class="form-label">Large file input example</label>
                <input style={{ backgroundColor: props.mode === 'dark' ? '#1d1d1d' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} class="form-control form-control-lg" id="formFileLg" type="file" />
            </div>
        </div>
    )
}
