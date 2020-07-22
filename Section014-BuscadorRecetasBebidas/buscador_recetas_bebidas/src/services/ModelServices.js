import { makeStyles } from '@material-ui/core/styles';

class ModelServices {
    constructor(modelContext, setOpen) {
        this.modelContext = modelContext;
        this.setOpen = setOpen;
    }

    get ModalStyle() {
        const top = 50 ;
        const left = 50;
      
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
    }

    get Sytles() {
        return makeStyles(theme => ({
            paper: {
              position: 'absolute',
              width: 350,
              backgroundColor: theme.palette.background.paper,
              boxShadow: theme.shadows[5],
              padding: theme.spacing(2, 4, 3),
            },
        }))
    }

    Open(id) {
        this.modelContext.setDrinkId(id);
        this.setOpen(true);
    }

    Close() {
        this.modelContext.setDrinkId(null);
        this.modelContext.setDrinkInfo({});
        this.setOpen(false);
    }
}

export default ModelServices;