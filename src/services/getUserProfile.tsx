export const dynamic = 'force-static';
export const revalidate = false;

export async function getUserProfile() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile`, {
            cache: 'force-cache',
            next: {
                revalidate: false
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch profile');
        }

        const data = await response.json();
        return {
            name: data.fullName || data.name || 'Usuário',
            error: null
        };
    } catch (error) {
        console.error('Error fetching profile:', error);
        return {
            name: 'Usuário',
            error: 'Failed to load profile'
        };
    }
}
