import React from 'react'
import './HeaderIcons.css'
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import { IconButton } from '@material-ui/core';
function HeaderIcons() {
    return (
        <div className="headerIcons">
            <IconButton>
                <FormatBoldIcon className="iconBtn"/> 
            </IconButton>
            <IconButton>
                <FormatItalicIcon className="iconBtn" />
            </IconButton>
            <IconButton>
                <FormatUnderlinedIcon className="iconBtn" />
            </IconButton>

            <IconButton>
                <FormatAlignLeftIcon className="iconBtn" />
            </IconButton>
            <IconButton>
                <FormatAlignCenterIcon className="iconBtn" />
            </IconButton>
            <IconButton>
                <FormatAlignRightIcon className="iconBtn" />
            </IconButton>

        </div>
    )
}

export default HeaderIcons
