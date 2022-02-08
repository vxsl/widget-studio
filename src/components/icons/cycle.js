import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const Cycle = ({ className, size, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2.4278 2.42343L2.42743 2.4238C1.95548 2.8974 1.62234 3.49128 1.46421 4.14093C1.30609 4.79057 1.32902 5.47112 1.53052 6.10864L1.53012 6.10877L1.53489 6.12109C1.55122 6.16326 1.57618 6.20156 1.60815 6.23354L1.60815 6.23354C1.63965 6.26503 1.67727 6.28971 1.71869 6.30605C1.79822 6.33808 1.88714 6.33783 1.96652 6.30529L1.98509 6.29768L2.00186 6.28666L2.5602 5.92L2.5602 5.92L2.56146 5.91916C2.5957 5.89632 2.63593 5.88413 2.67709 5.88413C2.71784 5.88413 2.75768 5.89608 2.7917 5.91849C2.8243 5.94107 2.84979 5.9725 2.86515 6.00908C2.88036 6.04529 2.88502 6.08504 2.87861 6.12376L2.50031 7.95708C2.50028 7.9572 2.50026 7.95732 2.50023 7.95744C2.48882 8.01115 2.45665 8.0582 2.41073 8.08833L2.41072 8.08832L2.40879 8.08961C2.37509 8.11227 2.33551 8.12457 2.29491 8.12502H2.23537L0.420196 7.72165L0.420201 7.72163L0.417064 7.72098C0.376749 7.71267 0.339799 7.6926 0.310878 7.66331C0.282472 7.63454 0.263063 7.59814 0.254993 7.55856C0.248748 7.51958 0.253707 7.4796 0.269314 7.44331L0.0779249 7.36101L0.269314 7.44331C0.285173 7.40643 0.311347 7.37492 0.344685 7.35257C0.344769 7.35251 0.344852 7.35245 0.344936 7.3524L0.926394 6.96615C0.986023 6.92761 1.03078 6.86991 1.05325 6.8025L0.856869 6.73704L1.05325 6.8025C1.07603 6.73416 1.0745 6.66006 1.04893 6.59272L1.04895 6.59271L1.04784 6.58991C0.750061 5.83884 0.671437 5.01871 0.821094 4.22475C0.970751 3.43079 1.34255 2.69557 1.89332 2.10445C2.44409 1.51333 3.15124 1.09056 3.93265 0.885232C4.71407 0.679906 5.5377 0.700444 6.30791 0.944462L6.30788 0.944574L6.3146 0.946459C6.35502 0.95779 6.39275 0.977148 6.42552 1.00338C6.4583 1.02961 6.48545 1.06218 6.50536 1.09913C6.52527 1.13609 6.53754 1.17668 6.54142 1.21848C6.5453 1.26028 6.54071 1.30243 6.52794 1.34242C6.51517 1.38241 6.49448 1.41942 6.46709 1.45123C6.4397 1.48305 6.40619 1.50902 6.36854 1.5276C6.3309 1.54617 6.28989 1.55697 6.24798 1.55936C6.20607 1.56174 6.16411 1.55565 6.1246 1.54146L6.12464 1.54137L6.1186 1.5394C5.48169 1.33227 4.79992 1.30522 4.1486 1.46122C3.49729 1.61723 2.90176 1.95022 2.4278 2.42343Z" fill="#366FE4" stroke="#366FE4" strokeWidth="0.416667" />
      <path d="M9.74485 2.46552L9.74486 2.46551C9.73773 2.42526 9.71892 2.388 9.69077 2.35837C9.66261 2.32873 9.62636 2.30803 9.58653 2.29885L9.58575 2.29867L7.7572 1.86964C7.75711 1.86962 7.75702 1.8696 7.75693 1.86958C7.73034 1.86346 7.7028 1.86263 7.67589 1.86713C7.64888 1.87164 7.62303 1.88143 7.59981 1.89595C7.57659 1.91046 7.55646 1.9294 7.54057 1.9517C7.52468 1.97399 7.51335 1.99919 7.50721 2.02587C7.5072 2.02587 7.5072 2.02588 7.5072 2.02589L7.0916 3.84623C7.08493 3.88432 7.08901 3.92354 7.10338 3.95949C7.11815 3.9964 7.14317 4.02832 7.17549 4.05148L7.17635 4.05209C7.21152 4.07756 7.25376 4.0914 7.29718 4.09168L7.29584 4.30001M9.74485 2.46552L8.28548 3.66481C8.20595 3.63278 8.11703 3.63303 8.03765 3.66558L8.02127 3.67229L8.00625 3.68167L7.40625 4.05667L7.40619 4.05658L7.4004 4.06047C7.36986 4.08101 7.33384 4.09189 7.29703 4.09168L7.29584 4.30001M9.74485 2.46552L9.74532 2.46802C9.75297 2.50833 9.74855 2.54999 9.73262 2.5878C9.717 2.62484 9.69101 2.65655 9.6578 2.67914L9.09827 3.02729L9.09811 3.02702L9.08878 3.03356C9.03157 3.07365 8.98901 3.13132 8.96756 3.1978L8.96756 3.19781C8.94611 3.26429 8.94695 3.33596 8.96995 3.40193L8.96975 3.402L8.9733 3.41086C9.23325 4.05931 9.33015 4.76162 9.25553 5.45624C9.1809 6.15085 8.93701 6.81655 8.54525 7.39498C8.15348 7.97341 7.62581 8.4469 7.00848 8.77395C6.39115 9.101 5.70301 9.27161 5.0044 9.27084L5.00346 9.27084C4.57405 9.27231 4.14695 9.20804 3.73699 9.08027L3.73586 9.07993C3.69689 9.06802 3.66066 9.04851 3.62928 9.02252C3.59789 8.99653 3.57197 8.96457 3.55301 8.9285C3.53405 8.89243 3.52242 8.85296 3.51881 8.81237C3.5152 8.77178 3.51967 8.73088 3.53196 8.69202L3.53198 8.69203L3.5327 8.68964C3.54468 8.65014 3.56437 8.6134 3.59063 8.58155L3.42989 8.44902L3.59063 8.58155C3.61689 8.5497 3.6492 8.52336 3.6857 8.50407C3.72219 8.48478 3.76215 8.47291 3.80326 8.46914C3.84437 8.46538 3.88581 8.4698 3.9252 8.48214L3.92551 8.48224C4.56517 8.68162 5.2474 8.70088 5.89729 8.53789C6.54718 8.37491 7.13959 8.03599 7.60946 7.55836C8.07933 7.08072 8.4085 6.48284 8.56081 5.83037C8.71313 5.17789 8.68269 4.49607 8.47286 3.85976L8.47311 3.85968L8.46928 3.84978C8.45295 3.80761 8.428 3.76931 8.39602 3.73733L9.74485 2.46552ZM7.29584 4.30001C7.209 4.29945 7.12451 4.27177 7.05417 4.22084L8.20834 3.85834C8.17897 3.8463 8.14604 3.8463 8.11667 3.85834L7.51667 4.23334C7.45142 4.27723 7.37447 4.30046 7.29584 4.30001Z" fill="#366FE4" stroke="#366FE4" strokeWidth="0.416667" />
    </svg>
  )
}

Cycle.propTypes = { className: PropTypes.string, size: PropTypes.string }
Cycle.defaultProps = { className: '', size: 'lg' }

export default Cycle