import { render } from '../../../../../test/jest-wrapper'
import CaPoolModalContent from './CaPoolModalContent'

describe('CaPoolModalContent component', () => {
    const i18n = {
        algorithm: 'Algorithm',
        authorityInfoAIA: 'authorityInfoAIA',
        authorityKeyID: 'authorityKeyID',
        basicConstraints: 'basicConstraints',
        certificateAuthority: 'certificateAuthority',
        certificatePolicies: 'certificatePolicies',
        commonName: 'commonName',
        country: 'country',
        dNSName: 'dNSName',
        download: 'download',
        embeddedSCTs: 'embeddedSCTs',
        exponent: 'exponent',
        extendedKeyUsages: 'extendedKeyUsages',
        fingerprints: 'fingerprints',
        issuerName: 'issuerName',
        keySize: 'keySize',
        keyUsages: 'keyUsages',
        location: 'location',
        logID: 'logID',
        menuTitle: 'menuTitle',
        method: 'method',
        miscellaneous: 'miscellaneous',
        modules: 'modules',
        no: 'no',
        notAfter: 'notAfter',
        notBefore: 'notBefore',
        organization: 'organization',
        policy: 'policy',
        publicKeyInfo: 'publicKeyInfo',
        purposes: 'purposes',
        serialNumber: 'serialNumber',
        signatureAlgorithm: 'signatureAlgorithm',
        subjectAltNames: 'subjectAltNames',
        subjectKeyID: 'subjectKeyID',
        subjectName: 'subjectName',
        timestamp: 'timestamp',
        validity: 'validity',
        value: 'value',
        version: 'version',
        yes: 'yes',
    }

    it('renders without crashing when data is empty', () => {
        const props = {
            data: [],
            i18n,
            maxHeight: 800,
        }
        const { container, asFragment } = render(<CaPoolModalContent {...props} />)
        expect(container).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })

    // it('renders with data and triggers actions', () => {
    //     const props = {
    //         data: [
    //             {
    //                 ext: {
    //                     aia: {
    //                         critical: false,
    //                     },
    //                     aKID: null,
    //                     basicConstraints: {
    //                         cA: true,
    //                         critical: true,
    //                     },
    //                     cp: {
    //                         critical: false,
    //                     },
    //                     keyUsages: {
    //                         critical: true,
    //                         purposes: ['Certificate Signing', 'CRL Signing'],
    //                     },
    //                     msCrypto: {
    //                         exists: false,
    //                     },
    //                     ocspStaple: {
    //                         critical: false,
    //                         required: false,
    //                     },
    //                     scts: {
    //                         critical: false,
    //                         timestamps: [],
    //                     },
    //                     sKID: {
    //                         critical: false,
    //                         id: 'DE:60:09:A9:5E:1B:00:D5:86:DF:87:62:A9:FC:0A:87:1A:8A:47:F1',
    //                     },
    //                     san: {
    //                         altNames: [],
    //                         critical: false,
    //                     },
    //                 },
    //                 files: {
    //                     pem: '-----BEGIN%20CERTIFICATE-----%0D%0AMIIBZTCCAQqgAwIBAgIQQJcvpwtpUBg42Io1sGFeHDAKBggqhkjOPQQDAjASMRAw%0D%0ADgYDVQQDEwdSb290IENBMB4XDTI0MDEyOTE3Mzg1MFoXDTI1MDEyODE3Mzg1MFow%0D%0AEjEQMA4GA1UEAxMHUm9vdCBDQTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABA0b%0D%0AeUYp3iFXkU0WU3fFi4knWmU8R1YZXcFded8sufEbx5epZ0g2mdMfi2BnIUMsNUQR%0D%0AP60y/vNMSJfPgoq9Wt+jQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8EBTAD%0D%0AAQH/MB0GA1UdDgQWBBTeYAmpXhsA1Ybfh2Kp/AqHGopH8TAKBggqhkjOPQQDAgNJ%0D%0AADBGAiEAhi4KDlJwkrg2sl72TtG7EwQlGYuw0vn8OjcyLm2kOMUCIQC7TuTHUqbd%0D%0AyKRJYRSVXfYDlrvPyGofp0c+1rRYCJVp2w==%0D%0A-----END%20CERTIFICATE-----%0D%0A',
    //                 },
    //                 fingerprint: {
    //                     sha1: 'CA:1D:41:B7:45:47:5B:C7:E8:9B:F4:D8:26:60:CF:81:BE:49:E1:76',
    //                     sha256: '31:BA:F7:8A:CF:DA:E1:30:A3:12:99:00:99:4C:23:FB:0F:CA:D6:95:6E:56:6D:D9:C7:4A:D6:F6:97:C0:C2:BC',
    //                 },
    //                 issuer: {
    //                     cn: 'Root CA',
    //                     dn: 'cn=Root CA',
    //                     entries: [['Common Name', 'Root CA']],
    //                 },
    //                 notBefore: '29. 1. 2024 18:38:50 (stredoeurópsky letný čas)',
    //                 notBeforeUTC: 'Mon, 29 Jan 2024 17:38:50 GMT',
    //                 notAfter: '28. 1. 2025 18:38:50 (stredoeurópsky letný čas)',
    //                 notAfterUTC: 'Tue, 28 Jan 2025 17:38:50 GMT',
    //                 subject: {
    //                     cn: 'Root CA',
    //                     dn: 'cn=Root CA',
    //                     entries: [['Common Name', 'Root CA']],
    //                 },
    //                 serialNumber: '40:97:2F:A7:0B:69:50:18:38:D8:8A:35:B0:61:5E:1C',
    //                 signature: {
    //                     name: 'ECDSA with SHA-256',
    //                     type: '1.2.840.10045.4.3.2',
    //                 },
    //                 subjectPublicKeyInfo: {
    //                     kty: 'Elliptic Curve',
    //                     keysize: 256,
    //                     x: '0D:1B:79:46:29:DE:21:57:91:4D:16:53:77:C5:8B:89:27:5A:65:3C:47:56:19:5D:C1:5D:79:DF:2C:B9:F1:1B',
    //                     y: 'C7:97:A9:67:48:36:99:D3:1F:8B:60:67:21:43:2C:35:44:11:3F:AD:32:FE:F3:4C:48:97:CF:82:8A:BD:5A:DF',
    //                     xy: '04:0D:1B:79:46:29:DE:21:57:91:4D:16:53:77:C5:8B:89:27:5A:65:3C:47:56:19:5D:C1:5D:79:DF:2C:B9:F1:1B:C7:97:A9:67:48:36:99:D3:1F:8B:60:67:21:43:2C:35:44:11:3F:AD:32:FE:F3:4C:48:97:CF:82:8A:BD:5A:DF',
    //                 },
    //                 unsupportedExtensions: [],
    //                 version: '3',
    //             },
    //         ],
    //         i18n,
    //         maxHeight: '100%',
    //     }
    //
    //     const { getByText } = render(<CaPoolModalContent {...props} />)
    //     expect(getByText('Test CN')).toBeInTheDocument()
    //     expect(getByText('Test Country')).toBeInTheDocument()
    //     expect(getByText('Test Not Before')).toBeInTheDocument()
    //     expect(getByText('Test Not After')).toBeInTheDocument()
    //     expect(getByText('Test DNS Name')).toBeInTheDocument()
    // })
})
