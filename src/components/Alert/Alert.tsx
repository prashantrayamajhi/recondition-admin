import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import { Color } from '../../entity/Color'


interface AlertProps {
  openAlert: boolean,
  setOpenAlert: Function,
  severity: Color,
  message: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    }
  })
)

export default function AlertComponent(alert: AlertProps) {

  const classes = useStyles()
  if (alert.openAlert) {
    window.setTimeout(() => {
      alert.setOpenAlert(false)
    }, 5000)
    return (
      <div className={classes.root}>
        <Alert severity={alert.severity} onClose={() => {
          alert.setOpenAlert(false)
        }}>{alert.message}</Alert>
      </div>
    )
  } else {
    return <></>
  }
}
