import { toast } from "react-toastify";

export const showCustomToast = ({ onClick }: { onClick: () => void }) => {
    toast.info(
      <div style={{ textAlign: 'center' }}>
        <p>Deseja confirmar a alteração?</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
          <button onClick={onClick}>Confirmar</button>
          <button onClick={() => toast.dismiss()}>Cancelar</button>
        </div>
      </div>,
      {
        position: 'top-center',
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        closeButton: false,
        icon: false,
      }
    );
}


export const showConfirmToast = ({ onClick, type }: { onClick: () => void, type?: string }) => {
    toast.info(
      <div className="text-center">
        <p>{
            type === 'edit'? "Deseja realmente atualizar a transação?" : "Deseja realmente excluir essa transação?"}</p>
        <div className="flex justify-center gap-2 mt-2">
          <button
            onClick={
                () => {
                    onClick();
                    toast.dismiss();
                }
            }
            className="px-3 py-1 bg-primary text-white rounded hover:bg-primary-500"
          >
            Confirmar
          </button>
          <button
            onClick={() => toast.dismiss()}
            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-primary-600"
          >
            Cancelar
          </button>
        </div>
      </div>,
      { 
        position: 'top-center',
        style: {
          backgroundColor: '#f0f0f0',
          color: '#004d61',
          fontSize: '16px',
          padding: '20px',
        },   
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        closeButton: false,
        icon: false,
      }
    );
  };

  export const showSuccessToast = ({ message }: { message: string }) => {
    toast.success(message,{
        style: {
            backgroundColor: '#f0f0f0',
            color: '#004d61',
            fontSize: '16px',
            padding: '20px',
        },
        
        icon: false,
        
    })
}
